using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LOL_API.Models
{
    public class Img
    {
        public string? full { get; set; }
        public string? sprite { get; set; }
        public string? group { get; set; }
        public int x { get; set; }
        public int y { get; set; }
        public int w { get; set; }
        public int h { get; set; }
    }
}