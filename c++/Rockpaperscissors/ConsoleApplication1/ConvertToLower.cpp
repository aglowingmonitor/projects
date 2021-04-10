#include <iostream>
#include <string>
#include <algorithm>
#include "ConvertToLower.h"
using namespace std;

string convertLower(string input) {
	string data = input;
	if (data == "") {
		return "No Data Given";
	}

	std::for_each(data.begin(), data.end(), [](char& c) {
		c = ::tolower(c);
	});
	return data;
}

