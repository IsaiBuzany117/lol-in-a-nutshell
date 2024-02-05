using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LOL_API.Models
{
    public class Champions
    {
        public required string name { get; init;}
        public required string title { get; init;}
        public required string blurb {get; init;}
        public Img? image { get; init; }
    }

}