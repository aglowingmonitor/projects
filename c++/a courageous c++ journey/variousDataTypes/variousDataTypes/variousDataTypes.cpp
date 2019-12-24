#include <iostream>
using namespace std;

int main()
{
	int i = 10;
	cout << "The variable of val i is: " << i << endl;
	cout << "The size of datatype int is: " << sizeof(i) << endl;
	//cout << sizeof(i) << endl;

	cout << "*******************************" << endl;

	short int s = 25;
	cout << "Value of variable s is: " << s << endl;
	cout << "Size of datatype short int is: " << sizeof(s) << endl;
	//cout << sizeof(short int) << endl;

	cout << "*******************************" << endl;

	long long int l = 30;
	cout << "Value of long long variable l is: " << l << endl;
	cout << "Size of long long datatype is: " << sizeof(l) << endl;
	//cout << sizeof(long long int) << endl;

	cout << "*******************************" << endl;

	float f = 1.23;
	cout << "Value of variable f is: " << f << endl;
	cout << "Size of float datatype is: " << sizeof(f) << endl;

	cout << "*******************************" << endl;

	double d = 3.364;
	cout << "Value of variable d is: " << d << endl;
	cout << "Size of double datatype is:" << sizeof(d) << endl;

	cout << "*******************************" << endl;
	
	char c = 'a';
	cout << "Value of variable c is: " << c << endl;
	cout << "Size of char datatype is: " << sizeof(c) << endl;

	cout << "*******************************" << endl;

	bool b = false;
	cout << "Value of variable b is: " << b << endl;
	cout << "Size of bool datatype is: " << sizeof(b) << endl;



	return 0;
}
