using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KiteLearn.Data;
using KiteLearn.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Net.Http.Headers;

namespace KiteLearn.InterfaceApi
{
    [Route("api/[controller]")]
    [ApiController, DisableRequestSizeLimit]
    public class VideosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        

        public VideosController(ApplicationDbContext context)
        {
            _context = context;
           
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideo()
        {
            return await _context.Videos
                .Select(x => new Video()
                {
                    id =x.id,
                    VideoName=x.VideoName,
                    ImgName=x.ImgName,
                    FileSize = x.FileSize ,
                    Name = x. Name,
                    Actor = x.Actor ,
                    Genre = x. Genre,
                    Duration = x.Duration ,
                    ReleaseYear = x.ReleaseYear ,
                    Description = x. Description,
                    Director = x.Director ,
                    TimeStamp = x.TimeStamp
                }).ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")] 
        public async Task<ActionResult<Video>> GetVideo(Guid id)
        {
            var video = await _context.Videos.FindAsync(id);

            if (video == null)
            {
                return NotFound();
            }

            return video;
        }

        // PUT: api/Contacts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVideo(Guid id, [FromForm] Video video)
        {
            if (id != video.id)
            {
                return BadRequest();
            }

            _context.Entry(video).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VideoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employee
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Video>> PostVideo([FromForm] Video video)
        {
            _context.Videos.Add(video);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVideo", new { id = video.id }, video);
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Video>> DeleteVideo(Guid id)
        {
            var video = await _context.Videos.FindAsync(id);
            if (video == null)
            {
                return NotFound();
            }
            
            _context.Videos.Remove(video);
            await _context.SaveChangesAsync();

            return video;
        }

        private bool VideoExists(Guid id)
        {
            return _context.Videos.Any(e => e.id == id);
        }




       







        /*    [NonAction]
            public async Task<string> SaveImg(IFormFile ImgFile)
            {
                string ImgName = new String(Path.GetFileNameWithoutExtension(ImgFile.FileName).Take(10).ToArray()).Replace(' ', '-');
                ImgName = ImgName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(ImgFile.FileName);
                var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", ImgName);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                   await ImgFile.CopyToAsync(stream);
                }
                return ImgName;
            }

            [NonAction]
            public async Task<string> SaveVideo(IFormFile VideoFile)
            {
                string VideoName = new String(Path.GetFileNameWithoutExtension(VideoFile.FileName).Take(10).ToArray()).Replace(' ', '-');
                VideoName = VideoName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(VideoFile.FileName);
                var videopath = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", VideoName);
                using (var stream = new FileStream(videopath, FileMode.Create))
                {
                    await VideoFile.CopyToAsync(stream);
                }
                return VideoName;
            }

            [NonAction]
            public void DeleteImage(string ImgName)
            {
                var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", ImgName);
                if (System.IO.File.Exists(imagePath))
                    System.IO.File.Delete(imagePath);
            }
            [NonAction]
            public void DeleteVideo(string VideoName)
            {
                var videoPath = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", VideoName);
                if (System.IO.File.Exists(videoPath))
                    System.IO.File.Delete(videoPath);
            }*/
    }
}
