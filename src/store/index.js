import { createStore } from 'vuex'

export default createStore({
  state: {
    choices:[],
    fields: [
      {
        "BigAutoField":{
          primary_key:[null, true, false],
          unique:[null, true, false],
        }
      },
      {
        "AutoField":{
          primary_key:[null, true, false],
          unique:[null, true, false],
        }
      },
      {
        "IntegerField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:""
        }
      },
      {
        "BigIntegerField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:""
        }
      },
      {
        "PositiveIntegerField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:0,
          editable:[null, true, false],
          choices:""
        }
      },
      {
        "FloatField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:"",
          editable:[null, true, false]
        }
      },
      {
        "BooleanField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:[null, true, false],
          editable:[null, true, false]
        }
      },
      {
        "CharField":{
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
        "TextField":{
          "null":[null, true, false],
          unique:[null, true, false],
          blank:[null, true, false],
          default:"",
          editable:[null, true, false]
        }
      },
      {
        "DateField":{
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
        "TimeField":{
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
        "DateTimeField":{
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
        "OneToOneField":{
          editable:[null, true, false],
          model:null,
          related_name:null,
          on_delete:null,
        }
      },
      {
        "ForeignKey":{
          model:null,
          unique:[null, true, false],
          default:"",
          editable:[null, true, false],
          on_delete:null,
          related_name:null
        }
      },
      {
        "ImageField":{
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
              "BigAutoField":{
                primary_key:true,
              }
            }
          },
          {
            password:{
              "CharField":{
                max_length:128,
                "null":true,
                blank:true,
                default:"",
                editable:true
              }
            }
          },
          {
            last_login:{
              "DateTimeField":{
                "null":true,
                blank:true,
                editable:true,
                auto_now:true
              }
            }
          },
          {
            is_superuser:{
              "BooleanField":{
                "null":false,
                blank:true,
                default: false,
                editable:true
              }
            }
          },
          {
            username:{
              "CharField":{
                max_length:150,
                "null":false,
                blank:false,
                editable:true
              }
            }
          },
          {
            last_name:{
              "CharField":{
                max_length:150,
                "null":true,
                blank:true,
                default:"",
                editable:true
              }
            }
          },
          {
            email:{
              "CharField":{
                max_length:256,
                "null":true,
                blank:true,
                default:"",
                editable:true
              }
            }
          },
          {
            is_staff:{
              "BooleanField":{
                "null":false,
                blank:true,
                default: false,
                editable:true
              }
            }
          },
          {
            is_active:{
              "BooleanField":{
                "null":false,
                blank:true,
                default: false,
                editable:true
              }
            }
          },
          {
            date_joined:{
              "DateTimeField":{
                "null":true,
                blank:true,
                editable:true,
                auto_now_add:true
              }
            }
          },
          {
            first_name:{
              "CharField":{
                max_length:150,
                "null":true,
                blank:true,
                default:"",
                editable:true
              }
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