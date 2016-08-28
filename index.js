/*******************************************************************************
 * Copyright (c) 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

'use strict';

var HumixSense = require('humix-sense');
var config = require('./config');
var Gpio = require('pigpio').Gpio;
var motor = new Gpio(config.gpio, {mode: Gpio.OUTPUT});

var center = (config.min + config.max)/2;
var pulseWidth = center;

var modulecfg = {
  moduleName: 'servo-module',
  commands: [ 'left', 'right', 'center' ],
  events: [],
  defug: true
}

setInterval(function () {
  motor.servoWrite(pulseWidth);
}, 1000);

var humix = new HumixSense(modulecfg);
var hsm;

humix.on('connection', function(humixSensorModule) {
  hsm = humixSensorModule;
  hsm.on('left', function(data) {
    pulseWidth = config.min;
  });

  hsm.on('right', function(data) {
    pulseWidth = config.max;
  });

  hsm.on('center', function(data) {
    pulseWidth = center;
  });
});
