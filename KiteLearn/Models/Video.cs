using System;
using System.Collections.Generic;

#nullable disable

namespace KiteLearn.Models
{
    public partial class Video
    {
        public Guid id { get; set; }
        public string ImgName { get; set; }
        public string VideoName { get; set; }
        public string FileSize { get; set; }
        public string Name { get; set; }
        public string Actor { get; set; }
        public string Genre { get; set; }
        public string Duration { get; set; }
        public string ReleaseYear { get; set; }
        public string Description { get; set; }
        public string Director { get; set; }
        public DateTime TimeStamp { get; set; }
        public Video()
        {
            TimeStamp = DateTime.Now;
        }
    }
}
