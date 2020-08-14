import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  some = {
    "root": {
      name: "Root",
      "id": 0,
      "isFolder": true,
      "children": [{
        "id": 1,
        "name": "Folder A",
        "description": "Description folder",
        "isFolder": true,
        "parent": 0,
        "icon": {
          "icon": "folder.png",
          "color": "#ffc726",
          "defaultImg": "true"
        },
        "children": [{
          "id": 11,
          "name": "Folder C",
          "description": "Description folder",
          "isFolder": true,
          "parent": 1,
          "icon": {
            "icon": "folder.png",
            "color": "#ffc726",
            "defaultImg": "true"
          },
          children: []
        }]
      },
      {
        "id": 2,
        "name": "Folder B",
        "description": "Description folder",
        "isFolder": true,
        "parent": 0,
        "icon": {
          "icon": "folder.png",
          "color": "#ffc726",
          "defaultImg": "true"
        },
        "children": [{
          "id": 21,
          "name": "Folder D",
          "description": "Description folder",
          "isFolder": true,
          "parent": 2,
          "icon": {
            "icon": "folder.png",
            "color": "#ffc726",
            "defaultImg": "true"
          },
          children: [{
            "id": 211,
            "name": "File 211",
            "description": "Description file",
            "isFolder": true,
            "parent": 21,
            "icon": {
              "icon": "folder.png",
              "color": "#ffc726",
              "defaultImg": "true"
            },
            children: []
          }],
        }, {
          "id": 22,
          "name": "File D",
          "description": "Description file",
          "isFolder": false,
          "parent": 2,
          "icon": {
            "icon": "folder.png",
            "color": "#ffc726",
            "defaultImg": "true"
          },
          children: []
        }
        ]

      },
      {
        "id": 3,
        "name": "File A",
        "description": "Description file",
        "isFolder": false,
        "parent": 0,
        "icon": {
          "icon": "file.png",
          "color": "",
          "defaultImg": "true"
        },
        children: []
      }, {
        "id": 4,
        "name": "File B",
        "description": "Description file",
        "isFolder": false,
        "parent": 0,
        "icon": {
          "icon": "file.png",
          "color": "",
          "defaultImg": "true"
        },
        "children": [{
          "id": 41,
          "name": "FILE",
          "description": "Description folder",
          "isFolder": true,
          "parent": 4,
          "icon": {
            "icon": "folder.png",
            "color": "#ffc726",
            "defaultImg": "true"
          },
          children: []
        }]
      }
      ]
    }
  };
  arr = [];
  constructor() { }

  getFilesObject() {
    return this.some
  }

  inFolder(obj, id) {
    return getFolderIn(obj, id);
    function getFolderIn(o, id) {
      // debugger
      for (var prop in o) {

        if (typeof (o[prop]) === 'object') {
          if (o['id'] === id) {
            // console.log(o.children)
            return o.children;
          }
          return getFolderIn(o[prop], id);
        } else {
          // console.log('Finite value: ', o[prop])
        }
      }
    }
  }

  addFolder(obj, id) {
    return getFolder(obj, id)
    function getFolder(o, id) {
      for (let prop in o) {
        if (typeof (o[prop]) === 'object') {
          if (o['id'] === id) {
            // console.log(o.children)
            return o.children;
          }
          return getFolder(o[prop], id);
        } else {
          // console.log('Finite value: ', o[prop])
        }
      }
    }
  }
  findAllFolder(obj) {
    var arr = new Set()
    getFolder(obj)
    function getFolder(o) {
      for (let prop in o) {
        if (typeof (o[prop]) === 'object') {
          if (o['isFolder']) {
            // console.log(o)
            arr.add(o)
            // return o.children;
          }
          getFolder(o[prop]);
        } else {
          // console.log('Finite value: ', o[prop])
        }
      }
    }
    return arr;
  }
  moveTo(obj, elem, to) {
    let remove = this.removeChild(obj, elem);
    let add = this.add(elem, to);
    let data = {
      children: remove.children,
      add
    }
    return data

  }
  removeChild(obj, elem) {
    // debugger
    for (var prop in obj) {

      if (typeof (obj[prop]) === 'object') {
        if (obj['id'] === elem.parent) {
          // console.log(obj.children)
          let idx = obj.children.indexOf(elem)
          let childOf = obj.children.splice(idx, 1);
          let data = {
            childOf,
            children: obj.children
          }
          return data;
        }
      }
    }
  }
  add(elem, to) {
    to.children.push(elem);
    return to
  }
  deleteElement(obj, elem) {
    let del = this.removeChild(obj, elem)
    return del.children
  }
  deleteAll(obj, elem) {
    let arr = []
    let addArr = []
    let replace = this.inFolder(obj, elem.parent)
    let del = this.removeChild(obj, elem)
    arr = replace

    del.childOf.forEach(val => {
      val.children.forEach(element => {
        element.parent = elem.parent
        addArr.push(element)
      });
      // console.log(val.children);
    })
    let arrNew = [...arr, ...addArr]
    // )
    console.log(arrNew);
    // return del.children
    return arrNew

    // console.log(del);
    // console.log(replace);

  }
}
