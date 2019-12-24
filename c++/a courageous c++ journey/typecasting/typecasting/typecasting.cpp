#include <iostream>
using namespace std;

int main()
{
	char c = 'a';
	//cout << c + 3;

	//cout << c * 3;
	//cout << 'd' + 0;

	//char ch = 'A';
	//cout << ch + 1 << endl;

	//ch = ch + 1;
	//cout << ch << endl;

	//ch = ch + 10;
	//cout << ch << endl;


	///Explicit Typecasting

	char ch = 'A';
	int val = int(ch);
	cout << val << endl;

	bool b = true;
	int x = int(b);
	cout << x << endl;

	int y = 70;
	ch = char(y);
	cout << ch << endl;

}
