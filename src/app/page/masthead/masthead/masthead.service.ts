import { Injectable } from '@angular/core';
import { ContentModule } from '../../app-content.module';
import { ImageService } from 'src/app/image.service';
import { MastHead } from './masthead.model';

@Injectable({
  providedIn: 'root'
})
export class MastHeadService {

  constructor(private imageService: ImageService) { }

  getMastHeadContent(): MastHead[] {
    return [
      new MastHead(
        this.imageService.getImage('masthead/Prarthana_masthead'),
        'Prarthana Banikya, Founder and Managing Editor',
        `Prarthana Banikya has worked as a climate activist, communications executive, kindergarten teacher, travel consultant and academic author, but mostly, she is a starry-eyed writer. A graduate in Sociology with a certificate in poetry, Prarthana is the recipient of the poetry prize at the 2018 Orange Flower Awards and a 2015 Pushcart prize nominee. You can read her work at http://prarthanabanikya.blogspot.in/`
      ),
      new MastHead(
        this.imageService.getImage('masthead/Juti_masthead'),
        'Juti Deka, Flash Fiction and Essay Editor',
        `Juti (which means jasmine in Assamese) was born and raised in Guwahati, Assam, and currently lives in Bangalore. Juti is an editor by profession with a postgraduate degree in English Language and Literature. She’s also a trained Odissi dancer and occasionally likes experimenting with folk and contemporary dance styles. She loves dogs, traveling and baking (in no particular order) and dreams of being a pet parent someday.`
      ),
      new MastHead(
        this.imageService.getImage('masthead/Shiron_masthead'),
        'Shiron Antony, Flash Fiction and Essay Editor',
        `Shiron is a postgraduate in English Literature and has over ten years of experience in writing, editing and copyediting. He loves poetry and horror films and adores the French novel, Maldoror, and works of the Roman poet, Martial. He considers himself “old school” and thinks that that’s cool. For sustenance, Shiron works for a large corporation pretending he knows English.`
      ),
      new MastHead(
        this.imageService.getImage('masthead/Parinitha_masthead'),
        'Parinitha Konowar, Art and Illustrations Editor',
        'Parinitha is an artist, illustrator and designer with a degree in Fine Arts ' +
        'from Karnataka Chitrakala Parishath. She is particularly passionate about urban and travel sketching' +
        'and believes that sketching is the one of the most effective ways to slow down, observe and learn about' +
        'our surroundings in a fast - paced world. Parinitha is the author and illustrator of the upcoming Children’s' +
        'Book Ajji and Mili into the Forest.'
      )
    ]
  }
}
