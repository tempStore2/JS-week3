"use strict";

new Vue({
  el: '#app',
  data: {
    admin: [{
      id: 1586934917210,
      imageUrl: 'https://images.generated.photos/zgvReP6SEalZJWeAeTCzRI9gYph5oebmbEWO68TLjcM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4OTAyMjMuanBn.jpg',
      name: 'Alonso',
      email: 'alonso@gmail.com',
      is_enabled: 1,
      selected: 'Admin'
    }, {
      id: 1196934917910,
      imageUrl: 'https://images.generated.photos/Rmc_hCbdAswI7pXcNju03pZedXztdwLVnY4UVblGTjM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMDQwMjMuanBn.jpg',
      name: 'Eric',
      email: 'eric@gmail.com',
      is_enabled: 0,
      selected: 'Editor'
    }, {
      id: 9179101196934,
      imageUrl: 'https://images.generated.photos/NjbOO-wquPtkDyidf06d4dsKSRV1mGU7MU1P1RokQRg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MDYxMjkuanBn.jpg',
      name: 'Kitty',
      email: 'kitty@gmail.com',
      is_enabled: 1,
      selected: 'Admin'
    }, {
      id: 9693491117910,
      imageUrl: 'https://images.generated.photos/Tz39gAQNchIj4qVdXJZd9A-ZABDfR18xpwgZ2HexqqM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NzcyOTMuanBn.jpg',
      name: 'Lisa',
      email: 'lisa@gmail.com',
      is_enabled: 1,
      selected: 'Editor'
    }, {
      id: 3491791196910,
      imageUrl: 'https://images.generated.photos/nPGXbZo3GJsYcteh4by__Mshk0d5wx61xZM-8CKNPJw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MTQ1MTUuanBn.jpg',
      name: 'Rose',
      email: 'rose@gmail.com',
      is_enabled: 0,
      selected: 'Viewer'
    }, {
      id: 9349179119610,
      imageUrl: 'https://images.generated.photos/1PubQZ60EnoyB8fHNeFtC5PacgYhrzB-euanu1U2cQ0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNDk0NDYuanBn.jpg',
      name: 'Frank',
      email: 'frank@gmail.com',
      is_enabled: 0,
      selected: 'Viewer'
    }],
    tempAdmin: {
      imageUrl: []
    },
    options: [{
      level: 'Admin'
    }, {
      level: 'Editor'
    }, {
      level: 'Viewer'
    }]
  },
  methods: {
    // 新增
    addAdmin: function addAdmin() {
      var _this = this;

      if (this.tempAdmin.id) {
        var id = this.tempAdmin.id;
        this.admin.forEach(function (item, i) {
          if (item.id === id) {
            _this.admin[i] = _this.tempAdmin;
          }
        });
      } else {
        var _id = new Date().getTime();

        this.tempAdmin.id = _id;
        this.admin.push(this.tempAdmin);
      }

      this.tempAdmin = {};
      $('#adminModal').modal('hide');
    },
    // 開啟
    openModal: function openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempAdmin = {
            imageUrl: []
          };
          this.isNew = true;
          $('#adminModal').modal('show');
          break;

        case 'edit':
          this.tempAdmin = Object.assign({}, item);
          this.isNew = false;
          $('#adminModal').modal('show');
          break;

        case 'delete':
          $('#deladminModal').modal('show');
          this.tempAdmin = Object.assign({}, item);
          break;

        default:
          break;
      }
    },
    // 刪除
    delAdmin: function delAdmin() {
      var _this2 = this;

      if (this.tempAdmin.id) {
        var id = this.tempAdmin.id;
        this.admin.forEach(function (item, i) {
          if (item.id === id) {
            _this2.admin.splice(i, 1);

            _this2.tempAdmin = {};
          }
        });
      }

      $('#deladminModal').modal('hide');
    }
  }
});
//# sourceMappingURL=all.js.map
