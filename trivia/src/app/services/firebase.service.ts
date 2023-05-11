import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore, doc, setDoc, collection, query, where, getDocs} from 'firebase/firestore';
import { IQuestion } from '../interfaces/question.interface';
import { QUESTIONS } from './questions';

const firebaseConfig = {
  apiKey: "AIzaSyC7OShhijmlP8-o-N73lQNknON7bApCeM8",
  authDomain: "trivia-s2023.firebaseapp.com",
  projectId: "trivia-s2023",
  storageBucket: "trivia-s2023.appspot.com",
  messagingSenderId: "160078757197",
  appId: "1:160078757197:web:b507649826999acd5c4b04"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: Firestore;
  questions: IQuestion[] = [];
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async importData(){
    const collectionName = 'Questions';
    const q = QUESTIONS;
    for(const question of q){
      /* Referencia a los documentos de la base de datos */
      const docRef = doc(collection(this.db, collectionName));
      await setDoc(docRef, question);
    }
  }

  async getAllQuestions(): Promise<IQuestion[]> {
    const collectionName = 'Questions';
    const collectionRef = collection(this.db, collectionName);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as IQuestion)
  }

  async shuffleQuestions(limit: number) {
    const questions = await this.getAllQuestions();
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, limit);
  }

}
