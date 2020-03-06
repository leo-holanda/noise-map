class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :address
      t.decimal :latitude, precision: 10, scale: 6 , null: false
      t.decimal :longitude, precision: 10, scale: 6 , null: false
      t.timestamps
    end
  end
end
