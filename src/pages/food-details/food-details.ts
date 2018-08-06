import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-food-details',
  templateUrl: 'food-details.html',
})
export class FoodDetailsPage {
  selection: string;
  foods: Array<string>;
  searchQuery: string = '';
  Vegetables: Array<string>;
  Fruits: Array<string>;
  Proteins: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selection = navParams.data.selection;

    this.Vegetables = [
      "Kale, cooked or raw",
      "Watercress, cooked or raw",
      "Collard greens, cooked or raw",
      "Mustard greens, cooked or raw",
      "Spinach, cooked or raw",
      "Bok choy, cooked or raw",
      "Brussels sprouts, chopped or 5 medium",
      "Broccoli, chopped",
      "Asparagus, 10 large spears",
      "Beets, 2 medium",
      "Shakeology Power Greens Boost,2 scoops (limit to 1 serving daily)",
      "Tomatoes, chopped, cherry, or 2 medium",
      "Tomatillos, chopped or 3 medium",
      "Pumpkin (regular or West Indian), cubed",
      "Squash (summer), sliced",
      "Chayote squash, chopped",
      "Winter squash (all varieties), cubed",
      "Seaweed (wakame and agar)",
      "String beans",
      "Peppers (sweet), sliced",
      "Poblano chilies, chopped",
      "Banana peppers, 3 medium",
      "Carrots, sliced or 10 medium baby",
      "Cauliflower, chopped",
      "Artichokes, 1⁄2 large",
      "Eggplant, 1⁄2 medium",
      "Okra",
      "Cactus (nopales), sliced",
      "Jicama, sliced",
      "Snow peas",
      "Cabbage, chopped",
      "Cucumbers",
      "Celery",
      "Lettuce",
      "Mushrooms",
      "Radishes",
      "Turnips, chopped or 1 medium",
      "Onions, chopped",
      "Sprouts",
      "Bamboo shoots",
      "Salsa (freshly made or pico de gallo)",
      "Vegetable broth, 2 cups"
    ];

    this.Fruits = [
      "Raspberries",
      "Blueberries",
      "Blackberries",
      "Strawberries",
      "Pomegranate, 1 small",
      "Guava, 2 medium",
      "Starfruit, 2 medium",
      "Passion fruit, 3 fruits",
      "Watermelon, chopped",
      "Cantaloupe, chopped",
      "Orange, divided into sections or 1 medium",
      "Bitter orange, 1 medium",
      "Tangerine, 2 small",
      "Apple, sliced or 1 small",
      "Apricots, 4 small",
      "Grapefruit, divided into sections or 1⁄2 large",
      "Cherries",
      "Grapes",
      "Kiwifruit, 2 medium",
      "Mango, sliced",
      "Peach, sliced or 1 large",
      "Plum, 2 small",
      "Pluot, 2 small",
      "Nectarine, sliced or 1 large",
      "Pear, sliced or 1 large",
      "Pineapple, chopped",
      "Banana, 1⁄2 large",
      "Green banana, 1⁄2 large",
      "Dwarf red banana, 1⁄2 small",
      "Breadfruit, 1⁄8 small",
      "Papaya, chopped",
      "Figs, 2 small",
      "Honeydew melon, chopped",
      "Pumpkin puree",
      "Salsa (store-bought)",
      "Tomato sauce (plain or marinara)",
      "Applesauce (unsweetened)",
    ]

    this.Proteins = [
      "Sardines (fresh or canned in water), 7 medium",
      "Boneless, skinless chicken or turkey breast, cooked, chopped",
      "Duck breast, cooked, chopped • Squab, cooked, chopped",
      "Goat, cooked, chopped",
      "Lean ground chicken or turkey(≥ 93% lean), cooked",
      "Fish, fresh water (catfish, tilapia, trout), cooked, flaked",
      "Fish, cold water (cod, salmon, halibut, tuna, mahi-mahi), cooked, flaked",
      "Game (buffalo, bison, ostrich, venison, rabbit), cooked",
      "Game: lean ground (≥ 95% lean), cooked, chopped",
      "Eggs, 2 large",
      "Egg whites, 8 large",
      "Shakeology, 1 scoop",
      "Greek yogurt (plain, 2%)",
      "Yogurt (plain, 2%)",
      "Shellfish (shrimp, crab, lobster), cooked",
      "Clams (canned, drained)",
      "Octopus, cooked, chopped • Squid, cooked, chopped",
      "Red meat (extra-lean), cooked, chopped",
      "Lean ground red meat (≥ 95% lean), cooked",
      "Organic tempeh",
      "Organic tofu (firm)",
      "Pork tenderloin, cooked, chopped",
      "Tuna (canned light in water, drained)",
      "Turkey slices, nitrite-free(minimally processed), 6 slices",
      "Ham slices, nitrite-free(minimally processed), 6 slices",
      "Cottage cheese (2%)",
      "Protein powder (whey, hemp, rice, pea), 11⁄2 scoops (approx. 42 g depending on variety)",
      "Veggie burger, 1 medium patty",
      "Turkey bacon, nitrite-free(uncured), 4 slices",
      "Chicken or turkey sausage, lean, nitrite-free (uncured), 1 link, 1 patty, or ground",
    ]

    this.foods = this[this.selection];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.foods = this[this.selection];

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.foods = this.foods.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
