import { createStore } from 'vuex'

export default createStore({
  state: {
    choices:[],
    fields: [
      {
        "BigAutoField":{
          primary_key:[true, false],
          unique:[true, false],
        }
      },
      {
        "AutoField":{
          primary_key:[true, false],
          unique:[true, false],
        }
      },
      {
        "IntegerField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:"this.choices"
        }
      },
      {
        "BigIntegerField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:"this.choices"
        }
      },
      {
        "PositiveIntegerField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:"this.choices"
        }
      },
      {
        "FloatField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false]
        }
      },
      {
        "BooleanField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:[true, false],
          editable:[true, false]
        }
      },
      {
        "CharField":{
          max_length:null,
          unique:[true, false],
          "null":[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false],
          choices:"this.choices"
        }
      },
      {
        "TextField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false]
        }
      },
      {
        "DateField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:{"timezone.now": [true, false]},
          editable:[true, false],
          auto_now:[true, false],
          auto_now_add:[true, false]
        }
      },
      {
        "TimeField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:{"timezone.now": [true, false]},
          editable:[true, false],
          auto_now:[true, false],
          auto_now_add:[true, false]
        }
      },
      {
        "DateTimeField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          default:{"timezone.now": [true, false]},
          editable:[true, false],
          auto_now:[true, false],
          auto_now_add:[true, false]
        }
      },
      {
        "OneToOneField":{
          editable:[true, false],
          model:null,
          related_name:null,
          on_delete:null,
        }
      },
      {
        "ForeignKey":{
          model:null,
          unique:[true, false],
          default:"",
          editable:[true, false],
          on_delete:null,
          related_name:null
        }
      },
      {
        "ImageField":{
          "null":[true, false],
          unique:[true, false],
          blank:[true, false],
          editable:[true, false],
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