import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { parseString } from "react-native-xml2js";

import ContinentList from "../../componets/ContinentList";

const ContinentStackNavigator = () => {
  const [continents, setContinents] = useState([]);

  // define the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // define the URL for the SOAP request
    const url =
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

    // define the SOAP request envelope
    const envelope = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
           <soapenv:Header/>
           <soapenv:Body>
              <web:ListOfContinentsByName/>
           </soapenv:Body>
        </soapenv:Envelope>
      `;

    // define the headers for the SOAP request
    const headers = new Headers({
      "Content-Type": "text/xml;charset=UTF-8",
      SOAPAction:
        "http://www.oorsprong.org/websamples.countryinfo/ListOfContinentsByName",
    });

    // make the SOAP request using the fetch function
    fetch(url, {
      method: "POST",
      headers,
      body: envelope,
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
        parseString(responseText, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            // The result is a JavaScript object that you can use in your app
            const continents =
              result["soap:Envelope"]["soap:Body"][0][
                "m:ListOfContinentsByNameResponse"
              ][0]["m:ListOfContinentsByNameResult"][0]["m:tContinent"];
            setContinents(continents);
          }
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Continents List
        </Text>
      </View>
      <ContinentList continents={continents} />
    </View>
  );
};

export default ContinentStackNavigator;
