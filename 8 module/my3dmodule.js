const thirdModule = angular.module("my3dmodule", [])

thirdModule.controller("HelloController", Hello3Ctrl);

function Hello3Ctrl() {
    this.message = "Hello I am thirs controller in  module 3"
}