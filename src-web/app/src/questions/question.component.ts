import {Component} from "@angular/core";
import {ProfileInfoComponent} from "../profileInfo/profileInfo.component";
@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: 'question.component.html',
    styleUrls: ['question.component.css'],
    directives: [ProfileInfoComponent]
})
export class  QuestionComponent {

}