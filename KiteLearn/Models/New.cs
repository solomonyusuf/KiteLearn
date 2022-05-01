using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace KiteLearn.Models
{
    public class New
    {
        public Guid id { get; set; }
        public string ImgPath { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime TimeStamp { get; set; }
        public New()
        {
            TimeStamp = DateTime.Now;
        }
    }
}
