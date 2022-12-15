import { createStore } from 'vuex'

export default createStore({
  state: {
    fields: [
      {
        "BigAutoField":{
          primary_key:[true, false],
        }
      },
      {
        "AutoField":{
          primary_key:[true, false]
        }
      },
      {
        "IntegerField":{
          null:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:this.choices
        }
      },
      {
        "BigIntegerField":{
          null:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:this.choices
        }
      },
      {
        "PositiveIntegerField":{
          null:[true, false],
          blank:[true, false],
          default:[0],
          editable:[true, false],
          choices:this.choices
        }
      },
      {
        "FloatField":{
          null:[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false]
        }
      },
      {
        "BooleanField":{
          null:[true, false],
          blank:[true, false],
          default:[true, false],
          editable:[true, false]
        }
      },
      {
        "CharField":{
          max_length:null,
          null:[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false],
          choices:this.choices
        }
      },
      {
        "TextField":{
          null:[true, false],
          blank:[true, false],
          default:"",
          editable:[true, false]
        }
      },
      {
        "DateField":{
          null:[true, false],
          blank:[true, false],
          default:{"timezone.now": [true, false]},
          editable:[true, false],
          auto_now:[true, false],
          auto_now_add:[true, false]
        }
      },
      {
        "TimeField":{
          null:[true, false],
          blank:[true, false],
          default:{"timezone.now": [true, false]},
          editable:[true, false],
          auto_now:[true, false],
          auto_now_add:[true, false]
        }
      },
      {
        "DateTimeField":{
          null:[true, false],
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
          default:"",
          editable:[true, false],
          on_delete:null,
          related_name:null
        }
      },
      {
        "ImageField":{
          null:[true, false],
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
            }
          },
          {
            password:{
            }
          },
          {
            last_login:{
            }
          },
          {
            is_superuser:{
            }
          },
          {
            username:{
            }
          },
          {
            last_name:{
            }
          },
          {
            email:{
            }
          },
          {
            is_staff:{
            }
          },
          {
            is_active:{
            }
          },
          {
            date_joined:{
            }
          },
          {
            first_name:{
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