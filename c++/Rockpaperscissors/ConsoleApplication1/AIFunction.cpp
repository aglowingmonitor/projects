#include <iostream>
#include <string>
#include <time.h>
#include "AIFunction.h"
using namespace std;

string SetAIName() {
	//This is where names are set OwO
	string names[7] = { "Jeff", "Jerome", "Jamal", "Graham", "Barbra", "Bertha", "Alfred Pennyworth" };
	srand(time(NULL));
	int rIndex = rand() % 7;
	return names[rIndex];
}

string GetAIGuess() {
	string guesses[6] = { "rock", "paper", "scissors", "rock", "paper", "scissors" };
	srand(time(NULL));
	int rIndex = rand() % 6;
	rIndex = rand() % 6;
	return guesses[rIndex];
}