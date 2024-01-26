using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace LOL_API.Models
{
    public class Items
    {
        public required string type { get; set; }
        public required string version { get; set; }
        [JsonExtensionData]
        public Dictionary<string, JsonElement>? ExtensionData { get; set; }
    }

    public class ItemData
{
    public string? id { get; set; }
    public string? name { get; set; }
    public string? plaintext { get; set; }
    public Img? image { get; set; }
}

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