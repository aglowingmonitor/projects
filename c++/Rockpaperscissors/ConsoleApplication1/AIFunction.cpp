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
	string guesses[3] = { "rock", "paper", "scissors" };
	srand(time(NULL));
	int rIndex = rand() % 3;
	return guesses[rIndex];
}