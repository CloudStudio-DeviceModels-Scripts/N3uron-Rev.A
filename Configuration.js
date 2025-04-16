function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // This function allows you to indicate the initial endpoint configuration
  // when a device is created using this model. This improves end-user 
  // experience significantly, because it allows the platform to create
  // all endpoints included in the device automatically when the device
  // is created.

  // In the code below, two endpoints are created. The first is a
  // temperature sensor, while the second one is a carbon dioxide sensor.

  var e1 = endpoints.addEndpoint("1", "/BLK01/CAB01/INV01/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e1.variableTypeId = 1146;
  var e2 = endpoints.addEndpoint("2", "/BLK01/CAB01/INV02/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e2.variableTypeId = 1146;
  var e3 = endpoints.addEndpoint("3", "/BLK01/CAB02/INV01/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e3.variableTypeId = 1146;
  var e4 = endpoints.addEndpoint("4", "/BLK01/CAB02/INV02/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e4.variableTypeId = 1146;
  var e5 = endpoints.addEndpoint("5", "/BLK01/CAB03/INV01/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e5.variableTypeId = 1146;
  var e6 = endpoints.addEndpoint("6", "/BLK01/CAB03/INV02/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e6.variableTypeId = 1146;
  var e7 = endpoints.addEndpoint("7", "/BLK01/CAB04/INV01/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e7.variableTypeId = 1146;
  var e8 = endpoints.addEndpoint("8", "/BLK01/CAB04/INV02/ENERGY_TODAY_VAL", endpointType.genericSensor);
  e8.variableTypeId = 1146;
  endpoints.addEndpoint("9", "/SUBS01/MTR01/VOLTAGE", endpointType.voltageSensor);
  endpoints.addEndpoint("10", "/SUBS01/MTR01/CURRENT", endpointType.currentSensor);
  endpoints.addEndpoint("11", "/SUBS01/MTR01/POWER_ACTIVE", endpointType.activePowerSensor);
  endpoints.addEndpoint("12", "/SUBS01/MTR01/POWER_APPARENT", endpointType.apparentPowerSensor);
  endpoints.addEndpoint("13", "/SUBS01/MTR01/POWER_REACTIVE", endpointType.reactivePowerSensor);
  var e14 = endpoints.addEndpoint("14", "/SUBS01/MTR01/ANGLE_PHASE", endpointType.genericSensor);
  e14.variableTypeId = 1145;
  var e15 = endpoints.addEndpoint("15", "/SUBS01/MTR01/ENERGY_ACTIVE_IMPORTED", endpointType.genericSensor);
  e15.variableTypeId = 1146;
  var e16 = endpoints.addEndpoint("16", "/SUBS01/MTR01/POWER_FACTOR", endpointType.genericSensor);
  e16.variableTypeId = 1148;
  endpoints.addEndpoint("17", "/SUBS01/MTR01/FREQUENCY", endpointType.frequencyMeter);
  var e18 = endpoints.addEndpoint("18", "/BLK01/MET01/PYR01/IRR", endpointType.genericSensor);
  e18.variableTypeId = 1147;
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  rules.canDelete = true;
  rules.canEditsubType = true;
}
