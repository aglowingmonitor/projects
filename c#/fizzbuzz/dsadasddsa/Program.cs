///Fizzbuzz
///A c# thing I guess

//Prerequisites
using System; //System used for main functionality of c# program, multithreading and timer.
using System.Threading; //Threading used to control sleep()

//The game itself
namespace dsadasddsa
{
    using System;
    using System.Timers;

    namespace fizzbuzz
    {
        
        public class Program
        {
            private static string compgo = ""; //Global string for the computer's guess
            private static int _countdown = 5; //Set countdown for how long the user has to guess
            private static Timer Timer = new Timer(1000); //The timer to determine how long it takes per tick to count down (1000ms = 1s)

            public static bool checkA(string guess, int i) //Checking the answer provided by the user
            {
                string correct = ""; //Creating the Fizzbuzz thing
                if (i % 3 == 0) { correct += "Fizz"; } //Adding "Fizz" to the var
                if (i % 5 == 0) { correct += "Buzz"; } //Adding "Buzz" to the var
                if (correct == "") { correct = i.ToString(); } //Converting the integer to a string so it can be read easily

                if (guess.ToLower() == correct.ToLower()) //Converting the user's guess and the correct answer to lowercase
                {
                    return true; //If the user guessed correctly it returns true
                }
                else { return false; } //If the user did not guess correctly it will return false
            }
            public static void play() //Start of the game
            {
                Console.Clear(); //Clearing the console out of any leftovers just in case
                //Playing it
                string guess = ""; //Global guess var for the play() void
                Timer.Elapsed += timeleft; //Calling the timeleft function to control the countdown per tick
                Timer.AutoReset = true; //Reset every tick to create the countdown effect
                Timer.Enabled = true; //Turn on the timer
                Timer.Stop(); //Stop it before starting to stop any premature issues
                
                for (int i = 1; i < 50; i++) //Looping from 1 to 50 (Since the first number is 1 the PC will always start first)
                {
                    
                    if (i % 2 == 0) //If it's even the user will guess. If odd the PC will guess.
                    {
                        Console.Clear();
                        _countdown = 5; //Resetting the clock
                        Timer.Start(); //Starting the timer
                        guess = Console.ReadLine(); //Accepting input from the user
                        var ch = checkA(guess, i); //Checking if what the user inputted was correct

                        if (!ch) //If they're not correct this happens
                        {
                            Console.Clear(); //Output is cleared
                            Timer.Stop(); //Timer is stopped
                            Console.WriteLine("Game Over!\nYour answer was incorrect.");
                            Thread.Sleep(3000); //Slept for 3s to give user time to read message
                            Console.Clear(); //Console is cleared before returning to Main() (menu)
                            Main();
                            return;
                        }
                    }
                    else
                    {
                        compgo = ""; //Resetting the compgo variable so it doesn't overwrite things
                        if (i % 3 == 0) { compgo += "Fizz"; } //Some logic for the computer's guessing.
                        if (i % 5 == 0) { compgo += "Buzz"; }
                        if (compgo == "") { compgo = i.ToString(); } //If it's not fizz or buzz it converts i to a string to be read easily
                    }
                }
                Console.Clear(); //If you manage to survive till the end of the loop the console will clear
                Timer.Stop(); //Timer is stopped
                Console.WriteLine("Game Over!\nYou Win!"); //Win message is displayed
                Thread.Sleep(3000); //Slept for 3s to give user time to read message
                Console.Clear(); //Console is cleared before returning to main menu
                Main();
                return;

            }

            private static void timeleft(Object source, ElapsedEventArgs e) //Countdown system. ElapsedEventArgs is the system controlling the elapsing of the clock
            {
                if (_countdown == 0) //If the countdown reaches 0 the game automatically stops
                {
                    Timer.Stop(); //Timer is stopped to prevent negative time

                    Console.Clear(); //Console is cleared
                    Console.WriteLine("\nTime is up!\nYou lose!"); //Lose message is displayed
                    Thread.Sleep(3000); //User is given 3s to read it before clearing
                    Console.Clear(); //Console is cleared, user is then returned to main menu
                    Main();
                    return;
                }
                else //However, if the time hasn't ran out it continues counting down
                {
                    int l = Console.CursorLeft; //Obtaining position of left of the output
                    int t = Console.CursorTop; //Obtaining position of top of the output
                    Console.CursorLeft = 0; //Assigning them as 0
                    Console.CursorTop = 0;
                    Console.WriteLine("Time left: " + _countdown + "s"); //Writing the time left
                    Console.WriteLine("Computer: " + compgo); //Writing what the computer has said
                    Console.CursorLeft = l; //Setting the cursor to these points
                    Console.CursorTop = t;
                    if (Console.CursorTop == 0) Console.CursorTop = 1; //Catch case for some weird overwrite issues
                    Console.CursorTop = 3; //Setting the cursor pos to 3 for the user to guess easily without overwriting the main text

                    _countdown -= 1; //Removing 1 from the countdown
                }
                
            }

            public static void rules() //Rules of the game, nothing much here
            {
                Console.WriteLine("\nThe rules to fizzbuzz");
                Console.WriteLine("You will be playing against a computer - you will each have turns between 1 to 50.\nYou will have 5 seconds to answer at your turn\n\nWhenever you reach a multiple of 3, you say Fizz.\nWhenever you reach a multiple of 5, you say Buzz.\nIf you reach a multiple of both 3 AND 5 then you say FizzBuzz.\nIf the number is NOT a multiple of 3 and 5 you just say the number");
                return; //Return function used to prevent it from hanging
            }

            public static void Main() //Main menu
            {
                string userinput = ""; //Local userinput var assigned to the console reader in case enter is hit by mistake

                Console.WriteLine("Welcome to Fizzbuzz!");
                while (userinput == "") //If the userinput is nothing, it will display the menu
                {
                    Console.WriteLine("Press 1 to Play - and press 2 to find out what FizzBuzz is");
                    userinput = Console.ReadLine(); //Waiting for user input
                    if (userinput == "1") { play(); }
                    if (userinput == "2") { rules(); }
                    userinput = ""; //Resetting the user input for after one of the functions above is ran
                }
            }
        }

    }

}
