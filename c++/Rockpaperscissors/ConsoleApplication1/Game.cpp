#include <iostream>
#include <string>
#include <locale>
#include "Game.h"
#include "AIFunction.h"
using namespace std;

int whoWon(string plrguess, string aiguess) {
	if (plrguess == aiguess) {
		return 0; //Draw
	}
	else if ((plrguess == "rock" && aiguess == "scissors") || (plrguess == "paper" && aiguess == "rock") || (plrguess == "scissors" && aiguess == "paper")) {
		return -1; //Player Wins
	}
	else {
		return 1; //Computer Wins
	}
}

void startGame(string name)
{
	//Getting the AI's name choice.
	string AIName = SetAIName();
	string guess = "";

	cout << "\nThe Computer's name is: " << AIName;
	
	while (guess == "") {
		cout << "\n[Rock, Paper or Scissors?]: "; cin >> guess;
	}

	string AIGuess = GetAIGuess();
	cout << "\n" << AIName << "'s guess was: " << AIGuess;

	int winner = whoWon(guess, AIGuess);
	if (winner == 0) {
		cout << "\nIt's a draw!";
	}

	if (winner == 1) {
		cout << AIName << " has won!";
	}

	if (winner == -1) {
		cout << name << " has won!";
	}

	string inp = "";

	while (inp == "") {
		cout << endl << "Would you like to play again? [Y/N] ";
	}

	if (inp == "y" || "Y") {
		startGame(name);
	}
	else {
		cout << "\nThank you for playing!";
	}

	//cout << "The game begins now.\n";
	//cout << "The name you chose was: " << name;
	//cout << "The name the AI chose was: " << SetAIName() << "\n";



}
