node-red-contrib-sgp30
==================================

A Node-RED node that provides access to the SGP30 air quality sensor.

This package uses <a href = "https://github.com/xoblite"> Xoblite's </a> <a href = "https://github.com/xoblite/BreakoutGardener">Breakout Gardener</a> library to access the SGP30

<a href = "https://cdn.shopify.com/s/files/1/0174/1800/files/Sensirion_Gas_Sensors_SGP30_Datasheet_EN-1148053.pdf?26051">SGP30 Datasheet</a>

The package was tested with the SGP30 Air Quality Sensor Breakout from <a href = "https://shop.pimoroni.com/products/sgp30-air-quality-sensor-breakout">Pimoroni</a>

---

## Table of Contents
* [Install](#install)
* [Usage](#usage)
  * [Name](#name)
  * [I2C Address](#i2c-address)
  * [I2C Bus](#i2c-bus)
* [Bugs / Feature request](#bugs--feature-request)
* [License](#license)
---

## Install

Install through Node-RED's pallete manager, or

Run the following command in your Node-RED user directory - most likely at `~/.node-red/`:

```
npm install node-red-contrib-sgp30
```

## Usage

Outputs total volatile organic compounds (TVOC) and equivalent CO2 (eCO2) readings. Also provides an overall score of the air quality based on the eCO2 reading. 

| Air Quality | Description |
| ----------- | ----------- |
| 1      | Excellent        |
| 2      | Good             |
| 3      | Moderate         |
| 4      | Poor             |
| 5      | Unhealthy        |

## Example
![Screenshot 2021-11-14 203212](https://user-images.githubusercontent.com/73316704/141708843-e5f7a02a-cb44-4e98-b534-7600a3978795.png)

### Name

The name displayed on the node in the editor

### I2C Address

The device address. By default, this value is ```0x58```

### I2C Bus

The I2C bus used by the device. By default, this value is ```1```

## Bugs / Feature request
Please [report any issues here](https://github.com/Lyubomir-Todorov/node-red-contrib-sgp30/issues)

## License
This project is licensed under the [MIT](./LICENSE) license.
