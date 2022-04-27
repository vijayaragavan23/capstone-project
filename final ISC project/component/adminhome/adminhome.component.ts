import { Component } from "@angular/core";
import { Student } from "src/app/model/student";
import { AuthenticationService } from "src/app/services/authentication.service";
import { DataService } from "src/app/shared/data.service";

@Component({
    selector: 'app-adminhome',
    templateUrl: '/adminhome.html'
})
export class AdminHomeComponent{
    
    studentsList: Student[] = [];
    studentObj: Student = {
        uid: '',
        id:'',
        name: '',
        dress: '',
        totaldress: '',
        mobile: '',
        status: ''
      };
    uid: any = '';
    name: any = '';
    dress: any = '';
    total_dress: any = '';
    mobile: any = '';
    status: any = 'received';

    constructor(private auth: AuthenticationService, private data : DataService ){ }
    
    ngOnInit(): void {
        this.getAllStudents();
    }

    getAllStudents() {

        this.data.getAllStudents().subscribe(res => {
    
          this.studentsList = res.map((e: any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          })
    
        }, err => {
          alert('Error while fetching student data');
        })
    
      }
     
      addStudent() {
        if (this.name == '' || this.dress == '' || this.mobile == '' || this.total_dress == '') {
          alert('Fill all input fields');
          return;
        }
    
        this.studentObj.uid = '';
        this.studentObj.totaldress = this.total_dress;
        this.studentObj.name = this.name;
        this.studentObj.dress = this.dress;
        this.studentObj.mobile = this.mobile;
        this.studentObj.status = this.status;
    
        this.data.addStudent(this.studentObj);
        this.resetForm();
    
      }
    
      updateStudent() {
    
      }
      resetForm() {
        this.uid = '';
        this.name = '';
        this.dress = '';
        this.total_dress = '';
        this.mobile = '';
        this.status = '';
      }



      deleteStudent(student: Student) {
        if (window.confirm('Are you sure you want to delete ' + student.name + ' ?')) {
          this.data.deleteStudent(student);
        }
      }


      washing(student: Student){
        console.log('hey')
        this.data.updateStudent(student);
      }

      Ironing(student: Student){

      }
    

}