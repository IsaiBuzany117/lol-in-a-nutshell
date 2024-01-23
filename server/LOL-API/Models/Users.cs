using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LOL_API.Models
{
    public class Users
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
    }
}