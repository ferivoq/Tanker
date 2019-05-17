using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Auto.Models
{
    public interface IItemsRepository
    {
        Task<IEnumerable<Item>> GetItemsAsync();
        Task<Item> GetItemByIdAsync(int id);
        Task<bool> AddItemAsync(Item item);
        Task<bool> UpdateItemAsync(Item item);
        Task<bool> DeleteAllItems();
        Task<bool> DeleteItemById(int id);
    }
}
