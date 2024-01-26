using Microsoft.AspNetCore.Mvc;
using LOL_API.Models;
using System.Text.Json;

namespace LOL_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        //Atributes
        private readonly HttpClient _httpClient;
        public ItemsController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet("{item}")]
        public async Task<IActionResult> GetItems(string item)
        {
            string url = "https://ddragon.leagueoflegends.com/cdn/14.2.1/data/es_MX/item.json";

            try
            {
                HttpResponseMessage responseMessage = await _httpClient.GetAsync(url);

                if (responseMessage.IsSuccessStatusCode)
                {
                    var data = await responseMessage.Content.ReadFromJsonAsync<Items>();

                    string resp;
                    try
                    {
                        resp = data.ExtensionData["data"].GetProperty(item).ToString();
                    }
                    catch (System.Exception)
                    {
                        resp = @"{""message"": ""No se pudo encontrar la propiedad""}";
                        
                    }

                    return Ok(resp);
                }
                else
                {
                    // Agrega un manejo para el caso en que la solicitud no sea exitosa
                    return StatusCode((int)responseMessage.StatusCode, "Error en la solicitud HTTP");
                }
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error en la solicitud HTTP: {ex.Message}");
            }
        }
    }
}