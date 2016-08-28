# Simple Humix-Sense Module for Servo Motor
This is a simple humix-sense module which is use to control
a single servo motor attaching direclty to raspberry pi.

## Requisites
make sure you already install `pigpio` package or run the
following command:
`sudo apt-get update; sudo apt-get install pigpio`

## Installation
`npm install`

## Configuration
The `config.json` contains 3 properties:
- gpio: the GPIO pin # that you attach to the signal wire
- min: the minimal pulsewidth of your servo motor
- max: the maximal pulsewidth of your servo motor


## Commands
- left: set the servo motor to minimal pulsewidth, which
  should turn to the very left
- right: set the servo motor to maximal pulsewidth, which
  should turn to the very right
- center: set the servo motor to mean of acceptable pulsewidth,
  which should turn to the middle position
