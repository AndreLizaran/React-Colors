# React Colors

## Instalación de íconos
1. npm i react-native-vector-icons
2. Agregar a android/app/build.gradle

~~~
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
~~~