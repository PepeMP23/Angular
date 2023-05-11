import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { IQuestion } from './interfaces/question.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'trivia';

  questions: IQuestion[] = [];
  correctAnswers = 0;
  questionIndex = 0;
  status: 'playing' | 'loading' | 'finished' | 'waiting' = 'waiting';
  showOptionResult = false;

  get currentQuestion(){
    return this.questions[this.questionIndex];
  }

  constructor(private firebaseService: FirebaseService) {
    // this.getData().then();
  }

  async nextQuestion(answerIndex: number) {
    if(answerIndex == this.currentQuestion.correctAnswerIndex){
      this.correctAnswers++;
    }
    this.showOptionResult = true;

    setTimeout(() => {
      if(this.questionIndex == this.questions.length -1){
        this.status = 'finished';
        this.questionIndex = 0;
        this.questions = [];
        return;
      }
      this.questionIndex++; // this.questionIndex = this.questionIndex +1
      this.showOptionResult = false;
    }, 2000);
  }

  async start(){
    this.status = 'loading';
    this.correctAnswers = 0;
    this.questions = await this.firebaseService.shuffleQuestions(10);
    this.status = 'playing';
  }

  async import() {
    console.log("Importing data...");
    await this.firebaseService.importData();
    console.log("Data imported!");
  }

  async getData() {
    const questions = await this.firebaseService.getAllQuestions();
    console.log(questions);
  }
}
