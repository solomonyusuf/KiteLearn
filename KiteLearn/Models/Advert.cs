using System;
using System.Collections.Generic;


namespace KiteLearn.Models
{
    public  class Advert
    {
        public int id { get; set; }
        public string ImgPath { get; set; }
        public string VideoPath { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string TimeStamp { get; set; }
    }
}
