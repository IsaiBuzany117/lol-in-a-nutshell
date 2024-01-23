using Microsoft.AspNetCore.Mvc;
using LOL_API.Models;

namespace LOL_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        //Atributes
        private readonly HttpClient _httpClient;
        public UsersController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            string url = "https://jsonplaceholder.typicode.com/posts";

            try
            {
                HttpResponseMessage responseMessage = await _httpClient.GetAsync(url);

                if (responseMessage.IsSuccessStatusCode)
                {
                    var data = await responseMessage.Content.ReadFromJsonAsync<Users[]>();

                    return Ok(data);
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