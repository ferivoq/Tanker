using Auto.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tanker.Standard
{
    public class ItemRepository : IItemsRepository
    {
        private readonly DatabaseContext _db;

        public ItemRepository(string dbPath)
        {
            _db = new DatabaseContext(dbPath);
        }

        public async Task<IEnumerable<Item>> GetItemsAsync()
        {
            try
            {
                var items = await _db.Items.ToListAsync();
                return items;
            }catch(Exception)
            {
                return null;
            }
        }

        public async Task<Item> GetItemByIdAsync(int id)
        {
            try
            {
                var item = await _db.Items.FindAsync(id);
                return item;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<bool> AddItemAsync(Item item)
        {
            try
            {
                if (await _db.Items.CountAsync() == 0)
                {
                    item.Consumption = 0;
                }
                else
                {
                    Item lastRefuel = await _db.Items.OrderByDescending(i => i.Mileage).FirstOrDefaultAsync();
                    var consumption = (item.Amount / (item.Mileage - lastRefuel.Mileage) * 100);
                    item.Consumption = (float)(Math.Round(consumption, 2));
                }
                var unitPrice = item.Price / item.Amount;
                item.UnitPrice = (float)(Math.Round(unitPrice, 2));

                var tracking = await _db.Items.AddAsync(item);
                await _db.SaveChangesAsync();
                var isAdded = tracking.State == EntityState.Added;
                return isAdded;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<bool> UpdateItemAsync(Item item)
        {
            try
            {
                var tracking = _db.Update(item);
                await _db.SaveChangesAsync();
                var isModified = tracking.State == EntityState.Modified;
                return isModified;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> DeleteAllItems()
        {
            try
            {
                _db.Items.RemoveRange(_db.Items);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }            
        }

        public Task<bool> DeleteItemById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
