package com.company;

import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner userInput;

        System.out.println("What is your name?");
        userInput = new Scanner(System.in);

        Game session = new Game();
        session.plrName = userInput.next();

        session.Start(); //Starting the game session
    }
}

class AI{
    String[] names = { "A", "B", "C", "D", "E", "F" };
    String[] possible_guesses = { "rock", "paper", "scissors" };

    Random generator = new Random();

    String setName(){
        return names[generator.nextInt(names.length)];
    }

    String aiMove(){
        String guess; //Resetting the var just in case
        guess = possible_guesses[generator.nextInt(possible_guesses.length)];
        return guess;
    }
}

class Game{
    public String plrName;

    void Start(){
        //Generate AI Name here
        AI session_AI = new AI();
        String aiName = session_AI.setName();

        Scanner userInput;
        String guess = "";
        String aiGuess;

        System.out.println("Your opponent is: "+ aiName);
        while(guess.equals("")){
            System.out.println("Rock, Paper or Scissors?");
            userInput = new Scanner(System.in);
            guess = userInput.next().toLowerCase();
        }

        aiGuess = session_AI.aiMove();
        int result = checkMoves(guess,aiGuess);
        switch(result){
            case 0:
                System.out.println("Their move: "+aiGuess);
                System.out.println("You win!");
                break;

            case 1:
                System.out.println("Their move: "+aiGuess);
                System.out.println("You lose!");
                break;
            case 2:
                System.out.println("Their move: "+aiGuess);
                System.out.println("It's a tie!");
                break;
            default:
                System.out.println("Their move: "+aiGuess);
                System.out.println("An error occurred. Game forfeited.");
                break;
        }
        
    }


    int checkMoves(String plrguess, String aiguess){
        if(plrguess.equals(aiguess)){
            return 2;
        }

        if ((plrguess.equals("rock") && aiguess.equals("scissors")) || (plrguess.equals("paper") && aiguess.equals("rock")) || (plrguess.equals("scissors") && aiguess.equals("paper")))
        {
            //System.out.println("Player won");
            return 0;
        }
        else
        {
            //System.out.println("CPU won");
            return 1;
        }
    }
}
