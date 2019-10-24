namespace CSharpMessing
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.set100 = new System.Windows.Forms.Button();
            this.progressBar1 = new System.Windows.Forms.ProgressBar();
            this.set50 = new System.Windows.Forms.Button();
            this.set0 = new System.Windows.Forms.Button();
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.say = new System.Windows.Forms.Button();
            this.richTextBox2 = new System.Windows.Forms.RichTextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // set100
            // 
            this.set100.Location = new System.Drawing.Point(13, 64);
            this.set100.Name = "set100";
            this.set100.Size = new System.Drawing.Size(75, 23);
            this.set100.TabIndex = 0;
            this.set100.Text = "Set to 100%";
            this.set100.UseVisualStyleBackColor = true;
            this.set100.Click += new System.EventHandler(this.set100_Click);
            // 
            // progressBar1
            // 
            this.progressBar1.Location = new System.Drawing.Point(13, 32);
            this.progressBar1.Name = "progressBar1";
            this.progressBar1.Size = new System.Drawing.Size(363, 23);
            this.progressBar1.TabIndex = 1;
            this.progressBar1.Click += new System.EventHandler(this.progressBar1_Click);
            // 
            // set50
            // 
            this.set50.Location = new System.Drawing.Point(94, 64);
            this.set50.Name = "set50";
            this.set50.Size = new System.Drawing.Size(75, 23);
            this.set50.TabIndex = 2;
            this.set50.Text = "Set to 50%";
            this.set50.UseVisualStyleBackColor = true;
            this.set50.Click += new System.EventHandler(this.set50_Click);
            // 
            // set0
            // 
            this.set0.Location = new System.Drawing.Point(175, 64);
            this.set0.Name = "set0";
            this.set0.Size = new System.Drawing.Size(75, 23);
            this.set0.TabIndex = 3;
            this.set0.Text = "Set to 0%";
            this.set0.UseVisualStyleBackColor = true;
            this.set0.Click += new System.EventHandler(this.set0_Click);
            // 
            // richTextBox1
            // 
            this.richTextBox1.Location = new System.Drawing.Point(13, 129);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.Size = new System.Drawing.Size(191, 169);
            this.richTextBox1.TabIndex = 4;
            this.richTextBox1.Text = "Enter something!";
            // 
            // say
            // 
            this.say.Location = new System.Drawing.Point(12, 304);
            this.say.Name = "say";
            this.say.Size = new System.Drawing.Size(192, 23);
            this.say.TabIndex = 5;
            this.say.Text = "Say it";
            this.say.UseVisualStyleBackColor = true;
            this.say.Click += new System.EventHandler(this.say_Click);
            // 
            // richTextBox2
            // 
            this.richTextBox2.BackColor = System.Drawing.SystemColors.ScrollBar;
            this.richTextBox2.Cursor = System.Windows.Forms.Cursors.Arrow;
            this.richTextBox2.Enabled = false;
            this.richTextBox2.Location = new System.Drawing.Point(210, 129);
            this.richTextBox2.Name = "richTextBox2";
            this.richTextBox2.Size = new System.Drawing.Size(166, 169);
            this.richTextBox2.TabIndex = 6;
            this.richTextBox2.Text = "Your text will appear here..";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(13, 110);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(78, 13);
            this.label1.TabIndex = 7;
            this.label1.Text = "Say Something";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(13, 10);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(101, 13);
            this.label2.TabIndex = 8;
            this.label2.Text = "Progress Bar testing";
            // 
            // webBrowser1
            // 
            this.webBrowser1.Location = new System.Drawing.Point(6, 19);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(454, 290);
            this.webBrowser1.TabIndex = 9;
            this.webBrowser1.Url = new System.Uri("https://sda.one", System.UriKind.Absolute);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.webBrowser1);
            this.groupBox1.Location = new System.Drawing.Point(399, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(466, 315);
            this.groupBox1.TabIndex = 11;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Just a Browser";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(877, 344);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.richTextBox2);
            this.Controls.Add(this.say);
            this.Controls.Add(this.richTextBox1);
            this.Controls.Add(this.set0);
            this.Controls.Add(this.set50);
            this.Controls.Add(this.progressBar1);
            this.Controls.Add(this.set100);
            this.Name = "Form1";
            this.Text = "Test Window";
            this.groupBox1.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button set100;
        private System.Windows.Forms.ProgressBar progressBar1;
        private System.Windows.Forms.Button set50;
        private System.Windows.Forms.Button set0;
        private System.Windows.Forms.RichTextBox richTextBox1;
        private System.Windows.Forms.Button say;
        private System.Windows.Forms.RichTextBox richTextBox2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.GroupBox groupBox1;
    }
}

