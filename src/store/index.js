import { createStore } from 'vuex'

export default createStore({
  state: {
    choices:[],
    fields: [
      {
        name:"BigAutoField",
        fields:{
          primary_key:[null, true, false],
          unique:[null, true, false],
        }
      },
      {
        name:"AutoField",
        fields:{
          primary_key:[null, true, false],
          unique:[null, true, false],
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
          choices:""
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
          choices:""
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
          choices:""
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
          choices:""
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
            id:{
              type: "BigAutoField",
              primary_key:true,
            }
          },
          {
            password:{
              type: "CharField",
              max_length:128,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            last_login:{
              type: "DateTimeField",
              "null":true,
              blank:true,
              editable:true,
              auto_now:true
            }
          },
          {
            is_superuser:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            username:{
              type: "CharField",
              max_length:150,
              "null":false,
              blank:false,
              editable:true
            }
          },
          {
            last_name:{
              type: "CharField",
              max_length:150,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            email:{
              type: "CharField",
              max_length:256,
              "null":true,
              blank:true,
              default:"",
              editable:true
            }
          },
          {
            is_staff:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            is_active:{
              type: "BooleanField",
              "null":false,
              blank:true,
              default: false,
              editable:true
            }
          },
          {
            date_joined:{
              type: "DateTimeField",
              "null":true,
              blank:true,
              editable:true,
              auto_now_add:true
            }
          },
          {
            first_name:{
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
    current_model:null
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