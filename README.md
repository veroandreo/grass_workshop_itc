GRASS GIS crash course
======================

This repository was created for a [GRASS GIS](https://grass.osgeo.org/) crash course that will take place at [ITC](https://www.itc.nl/) on November 3rd, 2017. The workshop is organized by [OSGeo Netherlands](https://osgeo.nl/) and [ITC](https://www.itc.nl/) - Faculty of Geo-information Science and Earth Observation from the University of Twente, Enschede. See the announcement at: https://osgeo.nl/grassgis-course/.

## Software

We will use GRASS GIS 7.2 (current stable version). It can be installed either through standalone installers/binaries or through OSGeo-Live (which includes all OSGeo software and packages).

### Standalone installers for different OS:

##### MS Windows

There are two different options:
1. Standalone installer: [32-bit version](https://grass.osgeo.org/grass72/binary/mswindows/native/x86/WinGRASS-7.2.2-1-Setup-x86.exe) | [64-bit version](https://grass.osgeo.org/grass72/binary/mswindows/native/x86_64/WinGRASS-7.2.2-1-Setup-x86_64.exe) 
2. OSGeo4W package (network installer for advanced users): [32-bit version](http://download.osgeo.org/osgeo4w/osgeo4w-setup-x86.exe) | [64-bit version](http://download.osgeo.org/osgeo4w/osgeo4w-setup-x86_64.exe) 

##### Mac OS

Install GRASS GIS 7.2 using homebrew [osgeo4mac](https://github.com/OSGeo/homebrew-osgeo4mac):
```
brew tap osgeo/osgeo4mac
brew install grass7
```

##### Ubuntu Linux

Install GRASS GIS from packages:
```
sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable
sudo apt-get update
sudo apt-get install grass
```

For other Linux distros, please find GRASS GIS in their package managers.

### OSGeo-live: 

[OSGeo-live](https://live.osgeo.org/) is a self-contained bootable DVD, USB thumb drive or Virtual Machine based on Lubuntu, that allows you to try a wide variety of open source geospatial software without installing anything. There are different options to run OSGeo-live:

* [Install OSGeo-live to your hard disk](https://live.osgeo.org/en/quickstart/osgeolive_install_quickstart.html)
* [Run OSGeo-live in a Virtual Machine](https://live.osgeo.org/en/quickstart/virtualization_quickstart.html)
* [Run OSGeo-live from a bootable USB flash drive](https://live.osgeo.org/en/quickstart/usb_quickstart.html)

For a quick-start guide, see: https://live.osgeo.org/en/quickstart/osgeolive_quickstart.html

### GRASS GIS Add-ons

* Time series exercise: [v.strds.stats](https://grass.osgeo.org/grass72/manuals/addons/v.strds.stats.html)
* Spatial interpolation exercise: [r.vif](https://grass.osgeo.org/grass72/manuals/addons/r.vif.html) and [r.learn.ml](https://grass.osgeo.org/grass72/manuals/addons/r.learn.ml.html)

Install with `g.extension name_of_addon`

## Data

* [North Carolina location (full dataset, 150Mb)](https://grass.osgeo.org/sampledata/north_carolina/nc_spm_08_grass7.zip)
* [MODIS LST mapset](https://www.dropbox.com/s/xl0jy9v3oe0munl/modis_lst.zip?dl=0)

## Authors

* Veronica Andreo. _Department of Earth Observation Science. ITC - Faculty of Geo-Information Science and Earth Observation. University of Twente._
* Sajid Pareeth. _Water Science and Engineering Department, IHE Delft Institute for Water Education._
* Paulo van Breugel. _Geo Media & Design, HAS University of Applied Sciences. OSGeo-NL_

## License

The workshop text and images:

* Creative Commons Attribution-ShareAlike 4.0 International License

JavaScript code for tabs and other things:

* BSD 2-Clause License

Some other content is included too:

* jQuery library (MIT license)
* higlight.js (BSD 3-Clause License)
* GRASS GIS CSS file
* Python and CC logos

See specific files for thier licenses.
