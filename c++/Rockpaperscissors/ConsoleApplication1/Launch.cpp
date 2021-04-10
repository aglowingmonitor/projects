#include <iostream>
#include "Game.h"
using namespace std;

void showRules() {
    cout << "\nThe rules of Rock Paper Scissors are as follows:\nScissors beats paper,\nPaper beats rock\nRock beats scissors.\n\n";
}

int main(){
    cout << "Welcome to Rock Paper Scissors";
    string inp = "";
    while (inp == "") {
        cout << "\n[1] To start playing\n[2]To view the rules of RPS\n[3]To exit.\n";
        cin >> inp;
        if (inp == "1"){
            string personName = "";
            while (personName == "") {
                cout << "Enter a name: "; cin >> personName;
            }
            cout << "Your selected name is: " << personName;
            startGame(personName);
        }
        else if (inp == "2") {
            showRules();
        }
        else if (inp == "3") {
            cout << "Exit";
            break;
        }
        inp = "";
    }
    return 0;
}
