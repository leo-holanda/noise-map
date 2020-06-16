class RemoveNoiseTypeAssociation < ActiveRecord::Migration[5.2]
  def change
    remove_column :complaints, :noise_type_id
    add_column :complaints, :noise_type, :integer
  end
end
