using System;
using System.Threading;

public class AI
{
    string[] names = { "Jeff", "Jerome", "Jamal", "Graham", "Barbra", "Bertha", "Alfred Pennyworth" };
    public string[] possible_guesses = { "rock", "paper", "scissors" }; // having this public lets me add more options to it easily - modularity ftw

    private string chosen_name = "";
    private string guess = "";
    private string whattoreturn = "";

    public string ai_stuff
    {
        get
        {
            if (chosen_name == "")
            {
                Random r = new Random();
                chosen_name = names[r.Next(0, names.GetLength(0) - 1)];
                whattoreturn = chosen_name;
            }
            else
            {
                guess = "";
                Random r = new Random();
                guess = possible_guesses[r.Next(0, possible_guesses.GetLength(0) - 1)];
                whattoreturn = guess;
            }
            return whattoreturn;
        }

        set
        {
            chosen_name = value;
        }
    }

    public AI()
    {
        chosen_name = "";
    }
}

public class Player
{
    private string plr_name;
    public string PlayerName
    {
        get { return plr_name; }
        set { plr_name = value; }
}

public class Game
{
    public Game()
    {
        //Creating the player
        string inp = "";
        while (inp == "")
        {
            Console.WriteLine("\nEnter a player name:");
            inp = Console.ReadLine();
        }
            Player player = new Player();
            player.plr_name = inp;
            start(player.plr_name);
    }

    public static int whowon(string aiguess, string plrguess, string ainame, string plrname)
    {
            if (plrguess == aiguess)
            {
                return 0;
            }

            if ((plrguess == "rock" && aiguess == "scissors") || (plrguess == "paper" && aiguess == "rock") || (plrguess == "scissors" && aiguess == "paper"))
            {
                return -1;
            }
            else
            {
                return 1;
            }
    }

    public static void checkAI()
    {
            AI ai = new AI();
            Console.WriteLine("Name: " + ai.ai_stuff);
            Thread.Sleep(2000);
            Console.WriteLine("Guess: "+ai.ai_stuff);

    }

    public static void start(object e)
    {
            Console.Clear();
            AI ai = new AI();
            //The start of the game.
            //Calling AI the first time to get it's name chosen
            Console.WriteLine("Getting CPU Name..");
            string plr_name = e.ToString();
            string ai_name = ai.ai_stuff;
            Console.Clear();
            Console.WriteLine("You are playing against: " + ai_name +"!");

            //OK off we goooo
            string guess = "";
            while (guess == "")
            {
                Console.WriteLine("Rock, Paper or Scissors:");
                guess = Console.ReadLine();
                guess.ToLower();
                bool okinp = false;

                foreach(string s in ai.possible_guesses)
                {

                    if(guess == s)
                    {
                        okinp = true;
                    }
                }

                if (okinp==true)
                {
                    var ai_go = ai.ai_stuff;
                    var winner = whowon(ai_go, guess, ai_name, plr_name);

                    Console.WriteLine(ai_name + "'s turn: " + ai_go);
                    if (winner == 0)
                    {
                        Console.WriteLine("\nIt's a tie!");
                    }

                    if (winner == 1)
                    {
                        Console.WriteLine("\n" + ai_name + " has won!");
                    }

                    if(winner == -1)
                    {
                        Console.WriteLine("\n" + plr_name + " has won!");
                    }

                    Thread.Sleep(3000);
                    Console.Clear();
                    string inp = "";
                    while (inp == "")
                    {
                        Console.WriteLine("\nWould you like to play again? [Y/N]");
                        inp = Console.ReadLine();
                        if (inp.ToLower() == "y")
                        {
                            MainClass.Main();
                        }

                        if (inp.ToLower() == "n")
                        {
                            return;
                        }
                    }
                }
                else { guess = ""; }
            }
        }
    }


    class MainClass
    {
        public static void showrules()
        {
            Console.WriteLine("\nThe rules of Rock Paper Scissors are as follows:\nScissors beats paper,\nPaper beats rock\nRock beats scissors.");
        }

        public static void Main()
        {
            Console.WriteLine("Welcome to Rock, Paper, Scissors");
            string inp = "";
            while (inp == "")
            {
                Console.WriteLine("\n[1] To start playing,\n[2] To view the rules of Rock Paper Scissors,\n[3] To exit.");
                inp = Console.ReadLine();
                if (inp == "1")
                {
                    //Game.checkAI(); (testing AI and guesses)
                    new Game();
                }

                if (inp == "2")
                {
                    showrules();
                    inp = "";
                }

                if (inp == "3")
                {
                    return;
                }
            }
        }
    }
}