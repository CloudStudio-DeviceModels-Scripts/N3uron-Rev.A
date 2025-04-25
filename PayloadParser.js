/*
    N3uron JSON Compact version parser
*/
function parseUplink(device, payload)
{
    function ExtractTagData(tagValuesObject){
        v = null;
        q = null;
        ts = null;
        return {
            v: (tagValuesObject["v"].toFixed(2)),
            q: tagValuesObject["q"],
            ts: new Date(tagValuesObject["ts"]).toUTCString()
        }
    }

    var N3uronData = payload.asJsonObject();
	
    //env.log(N3uronData);

   //Recorremos cada "tag" del array del json y procesamos lo que nos interesan
   for (let tag in N3uronData) {
  
    switch (tag){
        case "/BLK01/CAB01/INV01/ENERGY_TODAY_VAL":
            env.log("processing tag:", tag);
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv1 = device.endpoints.byAddress("01");
                etv1.updateGenericSensorStatus(ValueData.v, ValueData.ts);
                env.log(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB01/INV02/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv2 = device.endpoints.byAddress("02");
                etv2.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB02/INV01/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv3 = device.endpoints.byAddress("03");
                etv3.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB02/INV02/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv4 = device.endpoints.byAddress("04");
                etv4.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB03/INV01/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv5 = device.endpoints.byAddress("05");
                etv5.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB03/INV02/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv6 = device.endpoints.byAddress("06");
                etv6.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/CAB04/INV01/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv7 = device.endpoints.byAddress("07");
                etv7.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;   
        case "/BLK01/CAB04/INV02/ENERGY_TODAY_VAL":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var etv8 = device.endpoints.byAddress("08");
                etv8.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/BLK01/MET01/PYR01/IRR":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var irr = device.endpoints.byAddress("18");
                irr.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/VOLTAGE":
            //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var Volt = device.endpoints.byType(endpointType.voltageSensor);
                Volt.updateVoltageSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/CURRENT":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var curr = device.endpoints.byAddress("10");
                curr.updateCurrentSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/POWER_ACTIVE":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var ap = device.endpoints.byAddress("11");
                ap.updateActivePowerSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/POWER_APPARENT":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var ap = device.endpoints.byAddress("12");
                ap.updateApparentPowerSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/POWER_REACTIVE":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var ap = device.endpoints.byAddress("13");
                ap.updateReactivePowerSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/ANGLE_PHASE":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var aph = device.endpoints.byAddress("14");
                aph.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/ENERGY_ACTIVE_IMPORTED":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var eai = device.endpoints.byAddress("15");
                eai.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/POWER_FACTOR":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var aph = device.endpoints.byAddress("16");
                aph.updateGenericSensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        case "/SUBS01/MTR01/FREQUENCY":
             //Obtenemos el array con lecturas de este tag
            var tagvalues = N3uronData[tag];
            //Recorremos las lecturas y leemos los  valores v, q y ts
            tagvalues.forEach(valueElement => {
                var ValueData = ExtractTagData(valueElement);
                //Listo, actualizamos el endpoint
                env.log("value v " + ValueData.v);
                env.log("value q " + ValueData.q);
                env.log("value ts " + ValueData.ts);
                var frec = device.endpoints.byAddress("17");
                frec.updateFrequencySensorStatus(ValueData.v, ValueData.ts);
            });
            break;
        default:
            //Si viene algún "tag" que no nos interesa procesar lo logueamos
            env.log("Unknown tag: " + tag)
            break;            
    }
}

function buildDownlink(device, endpoint, command, payload) 
{ 
    
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.


	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	    switch (command.type) { 
	 	    case commandType.onOff: 
	 	 	    switch (command.onOff.type) { 
	 	 	 	    case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	    } 
	 	 	break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break;
            }
        } 
}
