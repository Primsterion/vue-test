import { Events } from "../api/dataSource/api/plugins/events";
import _Vue from "vue"

export default {
    install(Vue: typeof _Vue)  {
        const plugin = new MainStore();  
        Vue.prototype.$mainStore = plugin;
        (Vue as any).$mainStore = plugin;
        }
}

export class MainStore {

    constructor(){
        //_Vue.$api.SchoolService.GetSchoolInfoEvent.on(this.onGetSchoolInfo.bind(this));         
        //_Vue.$api.SchoolService.GetSchoolInfo();
    }  

    //Users

    users: Array<Object> = [
        {
            "id": "1",
            "name": "Annette Kovacek Sr.",
            "status": "Human Creative Manager",
            "phone": "(947) 772-9342 x4238"
          },
          {
            "id": "2",
            "name": "Hannah Dooley",
            "status": "Investor Branding Assistant",
            "phone": "209-576-0181"
          },
          {
            "id": "3",
            "name": "Luz Kerluke",
            "status": "Dynamic Program Consultant",
            "phone": "(676) 397-8263 x89978"
          },
          {
            "id": "4",
            "name": "Mr. Elisa Klein",
            "status": "Internal Branding Developer",
            "phone": "1-230-920-6575 x041"
          },
          {
            "id": "5",
            "name": "Bryant Schuster",
            "status": "Customer Optimization Architect",
            "phone": "(640) 990-4744 x766"
          },
          {
            "id": "6",
            "name": "Raquel Schaefer",
            "status": "Human Intranet Executive",
            "phone": "1-238-758-3777 x774"
          },
          {
            "id": "7",
            "name": "Sidney Wisozk",
            "status": "Legacy Solutions Supervisor",
            "phone": "1-354-907-0445"
          },
          {
            "id": "8",
            "name": "Arnold Gleichner DDS",
            "status": "National Program Administrator",
            "phone": "1-292-695-5502 x822"
          },
          {
            "id": "9",
            "name": "Mandy Armstrong",
            "status": "International Group Designer",
            "phone": "1-879-756-5878 x3036"
          },
          {
            "id": "10",
            "name": "Ms. Jeffery Johns",
            "status": "Corporate Response Planner",
            "phone": "655.470.5299"
          },
          {
            "id": "11",
            "name": "Leticia Berge",
            "status": "Dynamic Markets Architect",
            "phone": "1-216-210-3963"
          },
          {
            "id": "12",
            "name": "Audrey Kunze",
            "status": "Customer Optimization Assistant",
            "phone": "867.533.8162"
          },
          {
            "id": "13",
            "name": "Mrs. Ginger Kunde",
            "status": "Regional Identity Engineer",
            "phone": "1-965-323-5038 x561"
          },
          {
            "id": "14",
            "name": "Roxanne Gutkowski",
            "status": "Investor Factors Supervisor",
            "phone": "202.217.2942"
          },
          {
            "id": "15",
            "name": "Jennie Green DVM",
            "status": "Product Metrics Representative",
            "phone": "1-560-382-0848 x769"
          },
          {
            "id": "16",
            "name": "Lee Johnston",
            "status": "Lead Security Analyst",
            "phone": "(596) 864-2609"
          },
          {
            "id": "17",
            "name": "Antonio McGlynn",
            "status": "Global Web Supervisor",
            "phone": "590-680-7597 x2354"
          },
          {
            "id": "18",
            "name": "Valerie Rowe",
            "status": "District Applications Administrator",
            "phone": "(514) 497-7156 x7353"
          },
          {
            "id": "19",
            "name": "Carla Schinner",
            "status": "Dynamic Tactics Liaison",
            "phone": "(315) 410-3620 x756"
          },
          {
            "id": "20",
            "name": "Carole Mayert",
            "status": "Direct Usability Associate",
            "phone": "290.339.0771"
          },
          {
            "id": "21",
            "name": "Santos Homenick",
            "status": "Legacy Quality Manager",
            "phone": "(250) 792-3210"
          },
          {
            "id": "22",
            "name": "Ramiro Olson",
            "status": "Principal Metrics Liaison",
            "phone": "949-298-0201"
          },
          {
            "id": "23",
            "name": "Danielle Renner",
            "status": "Investor Branding Officer",
            "phone": "300.843.7276"
          },
          {
            "id": "24",
            "name": "Hector Hahn",
            "status": "Human Research Architect",
            "phone": "(355) 505-5398 x96962"
          },
          {
            "id": "25",
            "name": "Gladys Runolfsdottir",
            "status": "Lead Functionality Technician",
            "phone": "(739) 899-8346 x769"
          },
          {
            "id": "26",
            "name": "Miss Kevin D'Amore",
            "status": "Forward Interactions Architect",
            "phone": "(708) 449-6066"
          },
          {
            "id": "27",
            "name": "Clyde Greenfelder",
            "status": "Future Functionality Facilitator",
            "phone": "763-473-4001 x43036"
          },
          {
            "id": "28",
            "name": "Shelia Konopelski",
            "status": "Regional Integration Supervisor",
            "phone": "373-294-0602 x67837"
          },
          {
            "id": "29",
            "name": "Katie O'Kon",
            "status": "District Assurance Strategist",
            "phone": "282-665-1369 x8645"
          },
          {
            "id": "30",
            "name": "Charlotte Cummings",
            "status": "Senior Solutions Associate",
            "phone": "698.786.8347"
          },
          {
            "id": "31",
            "name": "Dr. Aubrey Goyette",
            "status": "International Markets Developer",
            "phone": "(411) 239-8017 x1406"
          },
          {
            "id": "32",
            "name": "Vera Cruickshank",
            "status": "Global Brand Consultant",
            "phone": "233-625-4840 x67170"
          },
          {
            "id": "33",
            "name": "Brandi Trantow",
            "status": "Dynamic Creative Consultant",
            "phone": "219-691-8090 x9597"
          },
          {
            "id": "34",
            "name": "Linda Borer",
            "status": "Corporate Branding Assistant",
            "phone": "630-592-4630 x379"
          },
          {
            "id": "35",
            "name": "Dave Blanda",
            "status": "International Quality Developer",
            "phone": "389-603-9572"
          },
          {
            "id": "36",
            "name": "Roderick Oberbrunner",
            "status": "Customer Brand Planner",
            "phone": "(509) 608-9005"
          },
          {
            "id": "37",
            "name": "Ada Denesik",
            "status": "District Research Director",
            "phone": "954-748-2811"
          },
          {
            "id": "38",
            "name": "Miss Andres Pfannerstill",
            "status": "Future Group Representative",
            "phone": "980-665-4323"
          },
          {
            "id": "39",
            "name": "Angel Hahn",
            "status": "Dynamic Branding Coordinator",
            "phone": "614-281-8310"
          },
          {
            "id": "40",
            "name": "Austin Jacobi",
            "status": "Investor Branding Designer",
            "phone": "808.789.8194 x2404"
          },
          {
            "id": "41",
            "name": "Kelvin Harris I",
            "status": "International Response Analyst",
            "phone": "448.645.1011 x56702"
          },
          {
            "id": "42",
            "name": "Nina O'Conner",
            "status": "Product Integration Facilitator",
            "phone": "505.483.0959 x58443"
          },
          {
            "id": "43",
            "name": "Beulah Lind",
            "status": "Dynamic Research Director",
            "phone": "1-775-642-7992 x7392"
          },
          {
            "id": "44",
            "name": "Mack Pagac",
            "status": "Human Identity Manager",
            "phone": "836.303.3647 x1443"
          },
          {
            "id": "45",
            "name": "Billy Wolff",
            "status": "Human Infrastructure Technician",
            "phone": "255-228-7813 x77578"
          },
          {
            "id": "46",
            "name": "Morris Sporer",
            "status": "Chief Security Architect",
            "phone": "(817) 772-1612 x40497"
          },
          {
            "id": "47",
            "name": "Ms. Bernard Tromp",
            "status": "Direct Functionality Orchestrator",
            "phone": "539.895.2269 x092"
          },
          {
            "id": "48",
            "name": "Terrance Keeling",
            "status": "International Accountability Assistant",
            "phone": "433.947.1881 x89249"
          },
          {
            "id": "49",
            "name": "Glenda Russel",
            "status": "Human Markets Technician",
            "phone": "1-497-203-3306"
          },
          {
            "id": "50",
            "name": "Kevin Boyle",
            "status": "Dynamic Quality Supervisor",
            "phone": "486.226.3532 x90395"
          }
    ]
    usersEvent = new Events<void>();

    addUsers(users: Array<Object>): void{
        this.users = users;
        this.usersEvent.trigger();
    }

    removeUser(id: number): void{
      console.log(id);
      this.users = this.users.filter(user => user.id !== id);
      this.usersEvent.trigger();
    }

    updateUser(data: Object): void{
      console.log(data);
      this.users = this.users.map(user => user.id === data.id ? data : user);
      this.usersEvent.trigger();
    }
}



