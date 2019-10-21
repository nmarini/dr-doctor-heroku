class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :first_name
      t.string :last_name
      t.string :title
      t.string :image_url
      t.string :bio
      t.string :user_note
      t.integer :user_id

      t.timestamps
    end
  end
end
