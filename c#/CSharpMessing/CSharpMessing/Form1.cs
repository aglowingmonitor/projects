using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CSharpMessing
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void set100_Click(object sender, EventArgs e)
        {
            progressBar1.Value = 100;
        }

        private void progressBar1_Click(object sender, EventArgs e)
        {
            
        }

        private void set50_Click(object sender, EventArgs e)
        {
            progressBar1.Value = 50;

        }

        private void set0_Click(object sender, EventArgs e)
        {
            progressBar1.Value = 0;
        }

        private void say_Click(object sender, EventArgs e)
        {
            richTextBox2.Text = richTextBox1.Text;
        }
    }
}
