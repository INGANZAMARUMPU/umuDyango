import { createStore } from 'vuex'

export default createStore({
  state: {
    choices:[],
    fields: [
      {
        name:"BigAutoField",
        fields:{
          primary_key:[null, true, false],
        }
      },
      {
        name:"AutoField",
        fields:{
          primary_key:[null, true, false],
        }
      },
      {
        name:"IntegerField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:[]
        }
      },
      {
        name:"BigIntegerField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:[]
        }
      },
      {
        name:"PositiveIntegerField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:[]
        }
      },
      {
        name:"FloatField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:"",
          editable:[null, true, false]
        }
      },
      {
        name:"BooleanField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:[null, true, false],
          editable:[null, true, false]
        }
      },
      {
        name:"CharField",
        fields:{
          max_length:null,
          unique:[null, true, false],
          "null":[null, true, false],
          blank:[null, true, false],
          default:"",
          editable:[null, true, false],
          choices:[]
        }
      },
      {
        name:"TextField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:"",
          editable:[null, true, false]
        }
      },
      {
        name:"DateField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:{"timezone.now": [null, true, false]},
          editable:[null, true, false],
          auto_now:[null, true, false],
          auto_now_add:[null, true, false]
        }
      },
      {
        name:"TimeField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:{"timezone.now": [null, true, false]},
          editable:[null, true, false],
          auto_now:[null, true, false],
          auto_now_add:[null, true, false]
        }
      },
      {
        name:"DateTimeField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:{"timezone.now": [null, true, false]},
          editable:[null, true, false],
          auto_now:[null, true, false],
          auto_now_add:[null, true, false]
        }
      },
      {
        name:"OneToOneField",
        fields:{
          editable:[null, true, false],
          model:null,
          related_name:null,
          on_delete:null,
        }
      },
      {
        name:"ForeignKey",
        fields:{
          model:null,
          unique:[null, true, false],
          default:"",
          editable:[null, true, false],
          on_delete:null,
          related_name:null
        }
      },
      {
        name:"ImageField",
        fields:{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          editable:[null, true, false],
          upload_to:"api/images"
        }
      },
    ],
    models: [
      {
        name:"User",
        fields:[
          {
            name:"id",
            fields:{
              type: "BigAutoField",
              primary_key:true,
            }
          },
          {
            name:"password",
            fields:{
              type: "CharField",
              max_length:128,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            name:"last_login",
            fields:{
              type: "DateTimeField",
              "null":true,
              blank:true,
              editable:true,
              auto_now:true
            }
          },
          {
            name:"is_superuser",
            fields:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            name:"username",
            fields:{
              type: "CharField",
              max_length:150,
              "null":false,
              blank:false,
              editable:true
            }
          },
          {
            name:"last_name",
            fields:{
              type: "CharField",
              max_length:150,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            name:"email",
            fields:{
              type: "CharField",
              max_length:256,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            name:"is_staff",
            fields:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            name:"is_active",
            fields:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            name:"date_joined",
            fields:{
              type: "DateTimeField",
              "null":true,
              blank:true,
              editable:true,
              auto_now_add:true
            }
          },
          {
            name:"first_name",
            fields:{
              type: "CharField",
              max_length:150,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
        ]
      },
    ],
    current_model:null,
    current_choice:null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})