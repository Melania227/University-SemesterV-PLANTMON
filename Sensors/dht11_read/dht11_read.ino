#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

#define DHTTYPE DHT11 //DHT21, DHT22
#define DHTPIN  2 // GPIO2
DHT dht(DHTPIN, DHTTYPE, 27); // 11 works fine for ESP8266 threshold => MHZ CPU

const char* ssid = "Velvet";
const char* password = "marzo2020";
const char* host = "http://192.168.100.19:80/sensorInfo";
const char* moist = "";

const int analogInPin = A0;  // ESP8266 Analog Pin ADC0 = A0
int sensorValue = 0;  // value read from the pot

/* Parametros medioambientales */
float temperatura; // double
float humedad;

HTTPClient http;
WiFiClient client;

const long oneSecond = 1000;  // a second is a thousand milliseconds
const long oneMinute = oneSecond * 60;
const long oneHour   = oneMinute * 60;
  
void setup()
{
  Serial.begin(115200);

  /* WIFI */
  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");

  /* SENSORES */
  dht.begin();
  pinMode(5, INPUT);
}

void loop(){
  /* Recolección de Parametros */
   temperatura = dht.readTemperature();
   humedad = dht.readHumidity();
   Serial.println("****************************");
   Serial.print("Temperatura actual: ");
   Serial.print(temperatura);
   Serial.println("°C");
   Serial.print("Humedad actual: "); 
   Serial.print(humedad, 4);
   Serial.println("%");
   Serial.println("****************************");
   Serial.println();
   
   sensorValue = analogRead(analogInPin); 
   Serial.print("luz = ");
   Serial.print(sensorValue);
   Serial.println();
   if(digitalRead(5) == HIGH){
     moist = "bajo"  ;
   }
   else {
     moist = "alto"  ;
     delay(1000);
   }
   delay(5000);

  /* LLAMADO API */
  
  http.begin(client,host);
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(" {\"sensorIdentifier\": \"A\",\"type\": \"temperatura\",\"data\":"+String(temperatura) +"}");
  
  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
    
  http.end();

   
  http.begin(client,host);
  http.addHeader("Content-Type", "application/json");
  httpResponseCode = http.POST(" {\"sensorIdentifier\": \"B\", \"type\": \"humedad\",\"data\":"+String(humedad) +"}");
  
  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
    
  http.end();

  
  http.begin(client,host);
  http.addHeader("Content-Type", "application/json");
  httpResponseCode = http.POST(" {\"sensorIdentifier\": \"C\", \"type\": \"luz\",\"data\":"+String(sensorValue) +"}");
  
  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
    
  http.end();

  if(digitalRead(5) == HIGH){
    http.begin(client,host);
    http.addHeader("Content-Type", "application/json");
    httpResponseCode = http.POST(" {\"sensorIdentifier\": \"D\", \"type\": \"riego\",\"data\":\"bajo\"}");
   }
   else {
    http.begin(client,host);
    http.addHeader("Content-Type", "application/json");
    httpResponseCode = http.POST(" {\"sensorIdentifier\": \"D\", \"type\": \"riego\",\"data\":\"alto\"}");
   }
  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
    
  http.end();
  delay(oneHour);
}
