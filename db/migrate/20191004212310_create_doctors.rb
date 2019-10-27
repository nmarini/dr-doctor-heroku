class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :last_name
      t.string :uid
      t.string :user_note
      t.integer :user_id

      t.timestamps
    end
  end
end
