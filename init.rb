def replace_database_yml(key, value)
  outdata = File.read("config/database.yml").gsub(/#{key}/, value)
  File.open("config/database.yml", 'w') do |out|
    out << outdata
  end          
end

if __FILE__ == $PROGRAM_NAME
  puts "Digite o user do seu mysql:"
  user_mysql = gets.chomp  
  puts "Digite a senha do seu mysql"
  senha_mysql = gets.chomp
  puts "==> configurando database.yml..."
  replace_database_yml("user_mysql", user_mysql)
  replace_database_yml("senha_mysql", senha_mysql)
  
  puts "==> criando banco de dados..."
  system("rake db:create") 
  puts "==> criando tabelas..." 
  system("rake db:migrate")
  puts "==> instalando gems..." 
  system("bundle install")
  puts "... done!"
  puts ""  
  puts "App pronta para rodar!"
  puts "Para rodar a aplicação, rode o comando:"    
  puts "==========================================" 
  puts ""  
  puts "rails s"
  puts ""  
  puts "=========================================="      
  puts "Autor: Diego Polido Santana"      
  puts "=========================================="      
  puts "Espero que atenda aos requisitos do teste"
  puts "=========================================="      
end